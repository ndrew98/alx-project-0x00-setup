import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  const handleClick = (ButtonType: string) => {
    alert(`${ButtonType} button clicked!`);
  };
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />
      <Button
        title="Click Me"
        size="medium"
        shape="rounded-md"
        variant="primary"
        disabled={false}
        className="mb-4 mt-4"
        onClick={() => handleClick("Primary")}
      />
      <Card />
      <Button
        title="Click Me"
        size="medium"
        shape="rounded-md"
        variant="secondary"
        disabled={true}
        className="mt-4 mb-4"
        onClick={() => handleClick("Secondary")}
      />
    </div>
  );
};
export default Landing;
