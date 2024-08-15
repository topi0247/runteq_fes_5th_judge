export default function IndexHeadTag({ headName, description }) {
  return (
    <>
      <h1 className="text-center text-3xl text-outline" >- {headName} -</h1>
      <p className="text-center text-lg md:text-xl mt-4 text-outline">{description}</p>
    </>
  );
};
