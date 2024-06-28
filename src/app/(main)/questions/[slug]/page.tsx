export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <>
      <h1>Question {slug}</h1>
    </>
  );
}
