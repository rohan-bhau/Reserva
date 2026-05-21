import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const DeleteFacility =  ({ b }) => {
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${b._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            },
        })
        const data = await res.json()
        console.log('data after delete', data)
        toast.error(`${b.name} has been deleted!`)
        window.location.reload()
    }
  return (
      <AlertDialog>
      <Button
            size='sm'
            className='text-red-500 border-none hover:bg-red-50 rounded-lg w-full md:w-auto'
            variant='outline'
          >
            <FaTrashAlt /> Delete
          </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                              This will permanently delete <strong>{ b?.name}</strong> and all of its
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

export default DeleteFacility
