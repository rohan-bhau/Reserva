"use client";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const DeleteBooking = ({ b }) => {
    const handleDelete = async() => {
        const res = await fetch(`http://localhost:8000/bookings/${b._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            },
        })
        const data = await res.json()
        console.log('data after delete', data)
        toast.error(`${b.facilityName} has been deleted!`)
        window.location.reload()
    }
  return (
        <AlertDialog>
                <Button
            variant="light"
            className='text-red-500 hover:bg-red-50 rounded-lg'
          >
            <FaTrashAlt /> Delete
          </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                              This will permanently delete <strong>{ b.facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}

export default DeleteBooking
