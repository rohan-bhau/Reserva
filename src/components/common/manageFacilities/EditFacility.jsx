"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const sports = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Basketball",
  "Volleyball",
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

const timeSlotsList = generateTimeSlots();

const EditFacility = ({ b }) => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([]);

    const {
      _id,
    name,
    sportType,
    location,
    price,
    capacity,
    image,
    description,
    timeSlots,
  } = b;

  useEffect(() => {
    if (timeSlots) {
      setSlots(timeSlots);
    }
  }, [timeSlots]);

  const handleAddSlot = () => {
    if (selectedSlot && !slots.includes(selectedSlot)) {
      setSlots([...slots, selectedSlot]);
      setSelectedSlot("");
    }
  };

  const handleRemoveSlot = (slot) => {
    setSlots(slots.filter((s) => s !== slot));
    };
    
    const onSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const updatedData = Object.fromEntries(formData.entries())
        updatedData.timeSlots = slots 
        console.log('form submitted', updatedData)

        const res = await fetch(`http://localhost:8000/facilities/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        const data = await res.json()
        toast.success('Facility Data Updated!')
        window.location.reload()
        console.log('data after patch', data)
    }

  return (
    <Modal>
      {/* button */}
      <Button
        size="sm"
        className="bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0B7C7B] w-full md:w-auto"
      >
        <FaEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-lg md:max-w-2xl rounded-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-xl font-semibold">
                Edit Facility
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-4 md:p-6 max-h-[80vh] overflow-y-auto">
              <Surface variant="default" className="rounded-xl">
                <form onSubmit={onSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="md:col-span-2">
                      <TextField name="name" isRequired defaultValue={name}>
                        <Label>Facility Name</Label>
                        <Input className="rounded-lg" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Sport */}
                    <Select
                      name="sportType"
                      defaultSelectedKey={sportType}
                      isRequired
                    >
                      <Label>Sport Type</Label>
                      <Select.Trigger className="rounded-lg">
                        <Select.Value />
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
                    <TextField
                      name="location"
                      isRequired
                      defaultValue={location}
                    >
                      <Label>Location</Label>
                      <Input className="rounded-lg" />
                      <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField
                      name="price"
                      type="number"
                      isRequired
                      defaultValue={price}
                    >
                      <Label>Price Per Hour (৳)</Label>
                      <Input className="rounded-lg" />
                      <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField
                      name="capacity"
                      type="number"
                      isRequired
                      defaultValue={capacity}
                    >
                      <Label>Capacity</Label>
                      <Input className="rounded-lg" />
                      <FieldError />
                    </TextField>

                    {/* TIME SLOT */}
                    <div className="md:col-span-2">
                      <Label className="mb-2 block">
                        Available Time Slots
                      </Label>

                      <div className="flex flex-col sm:flex-row gap-3">

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
                              {timeSlotsList.map((slot) => (
                                <ListBox.Item key={slot} id={slot}>
                                  {slot}
                                </ListBox.Item>
                              ))}
                            </ListBox>
                          </Select.Popover>
                        </Select>

                        <Button
                          type="button"
                          onPress={handleAddSlot}
                          className="bg-[#0EA5A4] text-white rounded-lg px-4"
                        >
                          <FaPlus />
                        </Button>
                      </div>

                      {/* SELECTED */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {slots.map((slot) => (
                          <div
                            key={slot}
                            className="bg-[#e6f7f6] text-[#0EA5A4] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                          >
                            {slot}
                            <button
                              type="button"
                              onClick={() => handleRemoveSlot(slot)}
                            >
                              <RxCross2 className="text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="md:col-span-2">
                      <TextField
                        name="image"
                        isRequired
                        defaultValue={image}
                      >
                        <Label>Image URL</Label>
                        <Input className="rounded-lg" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        isRequired
                        defaultValue={description}
                      >
                        <Label>Description</Label>
                        <TextArea className="rounded-lg min-h-[120px]" />
                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  {/* submit */}
                  <Button
                                      type="submit"
                                      slot='close'
                    className="w-full bg-[#0EA5A4] text-white py-3 rounded-lg 
                    hover:bg-[#0B7C7B] transition duration-300 font-semibold"
                  >
                    Update Facility
                  </Button>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditFacility;