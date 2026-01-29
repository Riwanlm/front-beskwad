import { ImagePlus, PenSquare, UserRoundPen, UserRoundX } from "lucide-react";
import { useAuthStore } from "../stores/authStore";
import { useRef } from "react";

export const UserSettings = () => {

  const user = useAuthStore().user;
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  return (
    <>
      <div className="h-auto w-auto flex border rounded-md border-[#fcb423]">
        <div className="flex flex-col gap-5 items-center justify-center border-r border-[#fcb423] px-8">
          <button className="btn btn-sm btn-outline rounded-full btn-success w-12 h-12"><ImagePlus size={20} /></button>
          <div className="avatar">
            <div className="ring-[#fcb423] ring-offset-white w-14 lg:w-28 rounded-full ring-3 ring-offset-2">
              <img src="https://solomonk.fr/img/classes/FECA.png" />
            </div>
          </div>
        </div>
        <div className="basis-7/8 flex flex-col pl-10 gap-5 pb-10">
          <div className="flex flex-row items-center mt-10 gap-2">
            <div className="uppercase text-3xl">{user?.username ? user.username : "Erreur récuppération Pseaudo"}</div>
            <button className="btn btn-sm btn-outline btn-success" onClick={() => openModal()}><UserRoundPen size={18} /></button>
          </div>
          <div className="flex flex-row w-1/2 gap-5">
            <div className="w-1/2 flex flex-col gap-1">
              <div className="textarea-xl">Date de naissance :</div>
              <div className="border rounded-sm border-[#fcb423] p-2">10/04/1995</div>
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <div className="textarea-xl">Genre :</div>
              <div className="border rounded-sm border-[#fcb423] p-2">Homme</div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 content-around gap-1">
            <div className="textarea-xl">Bio :</div>
            <div className="border rounded-sm border-[#fcb423] p-2">stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</div>
          </div>
          <div className="flex flex-rox w-1/2 justify-between">
            <button className="btn btn-success"><PenSquare size={18} /> Modifier mon mot de passe</button>
            <button className="btn btn-error"><UserRoundX size={18} /> Supprimer mon compte</button>
          </div>
        </div>
      </div>
      {/**MODALE**/}
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  )
};