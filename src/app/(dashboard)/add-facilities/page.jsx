'use client'
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Card,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

const sports = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Basketball",
  "Volleyball"
];

// generate time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let i = 6; i < 22; i++) {
    const format = (hour) => {
      const ampm = hour >= 12 ? "PM" : "AM";
      const h = hour % 12 === 0 ? 12 : hour % 12;
      return `${h}:00 ${ampm}`;
    };
    slots.push(`${format(i)} - ${format(i + 1)}`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const AddFacilityPage = () => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    if (selectedSlot && !slots.includes(selectedSlot)) {
      setSlots([...slots, selectedSlot]);
      setSelectedSlot(""); 
    }
  };

  const handleRemoveSlot = (slot) => {
    setSlots(slots.filter((s) => s !== slot));
  };

  const { 
          data: session, 
    } = authClient.useSession() 
  
    const user = session?.user
    // console.log('session', user)

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget

    const author = user?.name
    const authorId = user?.id
    const authorEmail = user?.email

    const formData = new FormData(e.currentTarget);
    const facilityData = Object.fromEntries(formData.entries());

    facilityData.timeSlots = slots 
    facilityData.author = author;
    facilityData.authorId = authorId;
    facilityData.authorEmail = authorEmail;

    console.log(facilityData);

    const res = await fetch(`http://localhost:8000/facilities`, {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(facilityData)
    })

    const data = await res.json()
    console.log('data after post', data)
    toast.success("Facility Added Successfully")

    form.reset()
    setSlots([]);
  };

  return (
    <div className="min-h-screen mt-15 bg-[#f8fafc] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Add New Facility
          </h2>
          <p className="text-gray-500">
            Fill in the details to list your sports facility
          </p>
        </div>

        {/* Card */}
        <Card className="p-8 shadow-lg border rounded-2xl">

          <form onSubmit={onSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="md:col-span-2">
                <TextField name="name" isRequired>
                  <Label>Facility Name</Label>
                  <Input placeholder="Green Turf Football Ground" className="rounded-lg" />
                  <FieldError />
                </TextField>
              </div>

              {/* Sport */}
              <Select
                name="sportType"
                isRequired
              >
                <Label>Sport Type</Label>
                <Select.Trigger className="rounded-lg">
                  <Select.Value placeholder="Select sport" />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {sports.map((sport) => (
                      <ListBox.Item key={sport} id={sport}>
                        {sport}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Location */}
              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input placeholder="Dhaka, Bangladesh" className="rounded-lg" />
                <FieldError />
              </TextField>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price Per Hour (৳)</Label>
                <Input placeholder="1000" className="rounded-lg" />
                <FieldError />
              </TextField>

              {/* Capacity */}
              <TextField name="capacity" type="number" isRequired>
                <Label>Capacity (Players)</Label>
                <Input placeholder="10 players" className="rounded-lg" />
                <FieldError />
              </TextField>

              {/* TIME SLOT SECTION */}
              <div className="md:col-span-2">

                <Label className="mb-2 block">Available Time Slots</Label>

                {/* Select + Add */}
                <div className="flex gap-3 items-center">

                  <Select
                    selectedKey={selectedSlot}
                    onSelectionChange={(key) => setSelectedSlot(key)}
                    className="flex-1"
                  >
                    <Select.Trigger className="rounded-lg">
                      <Select.Value placeholder="Select time slot" />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        {timeSlots.map((slot) => (
                          <ListBox.Item key={slot} id={slot}>
                            {slot}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* ADD BUTTON */}
                  <Button
                    type="button"
                    onPress={handleAddSlot}
                    className="bg-[#0EA5A4] text-white rounded-lg px-4"
                  >
                    <FaPlus />
                  </Button>
                </div>

                {/* SELECTED TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {slots.map((slot) => (
                    <div
                      key={slot}
                      className="bg-[#e6f7f6] text-[#0EA5A4] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {slot}
                      <Button variant="outline"
                        type="button"
                        onClick={() => handleRemoveSlot(slot)}
                        className=" border-none"
                      >
                        <RxCross2 className="text-red-500"/>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    placeholder="https://images.unsplash.com/football-ground.jpg"
                    className="rounded-lg"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Well-maintained football turf with floodlights and seating..."
                    className="rounded-lg min-h-[120px]"
                  />
                  <FieldError />
                </TextField>
              </div>

            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full bg-[#0EA5A4] text-white py-3 rounded-lg 
              hover:bg-[#0B7C7B] transition duration-300 font-semibold"
            >
              Add Facility
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddFacilityPage;