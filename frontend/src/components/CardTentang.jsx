export default function CardTentang({ img, text }) {
  return (
    <div className="flex justify-center items-center gap-4 w-[287px] py-3 shadow-lg rounded-lg">
      <img src={img} alt="logo-peduli" />
      <p>{text}</p>
    </div>
  );
}
