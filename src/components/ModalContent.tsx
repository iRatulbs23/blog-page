export default function ModalContent({ onClose }: any) {
  return (
    <div className="modal bg-red-200">
      <div>I'm a modal dialogue</div>
      <button className="bg-white text-black" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
