async function getData() {
  try {
    const res = await fetch("https://localhost:8000/api/abouts");

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function content() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <div className="flex p-20 justify-center">{"Content"}</div>
    </>
  );
}
