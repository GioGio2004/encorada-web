import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function GrabPic() {
  const [imageUrl_1, setImageUrl_1] = useState("");
  const [imageUrl_2, setImageUrl_2] = useState("");

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setImageUrl_1(data.imageUrl_1);
          setImageUrl_2(data.imageUrl_2);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  const getImages = async () => {
    const query = "animals"; // or whatever the user selects
    const response = await fetch(`/api/your-route?query=${query}`);
    const data = await response.json();
    console.log(data.images); // array of image URLs
  };
  return (
    <div>
      {/* {imageUrl_1 && <img src={imageUrl_1} alt="Image 1" />} */}
      {/* {imageUrl_2 && <img src={imageUrl_2} alt="Image 2" />} */}

      <Image
        src={imageUrl_1}
        alt="Image 1"
        width={500}
        height={500}
        className="m-12 rounded-xl"
      />
      <Image
        src={imageUrl_2}
        alt="Image 1"
        width={500}
        height={500}
        className=" m-12 rounded-xl"
      />

      <Button
        onClick={getImages}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Images
      </Button>
    </div>
  );
}
