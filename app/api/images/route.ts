import grabPic, { GrabPicError } from "grab-picture"
import { NextRequest, NextResponse } from "next/server"

export async function GET(rep:NextRequest) {
  try {
    // User manually passes the environment variable, but validation happens in the npm package
    const nature_image_urls = await grabPic("nature", process.env.UNSPLASH_ACCESS_KEY!, {
      count: 20,
      size: "regular",
    })
    const programmers_image_urls = await grabPic("programmers", process.env.UNSPLASH_ACCESS_KEY!, {
      count: 20,
      size: "regular",
    })
    const animals_image_urls = await grabPic("animals", process.env.UNSPLASH_ACCESS_KEY!, {
      count: 20,
      size: "regular",
    })
    const people_image_urls = await grabPic("people", process.env.UNSPLASH_ACCESS_KEY!, {
      count: 20,
      size: "regular",
    })

    // here i am getting the images according to users query
    const query = new URL(rep.url).searchParams.get("query") || "nature";
    const query_image_urls = await grabPic(query, process.env.UNSPLASH_ACCESS_KEY!, {
      count: 20,
      size: "regular",
    })

    // image urls
    const nature = nature_image_urls.all()
    const programmers = programmers_image_urls.all()
    const animals = animals_image_urls.all()
    const people = people_image_urls.all()
    const queryImages = query_image_urls.all()

    const imageUrls = [
      ...nature,
      ...programmers,
      ...animals,
      ...people,
    ]

    function getRandomImages(images: string[], count: number): string[] {
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    const random10 = getRandomImages(imageUrls, 10);


    // Return the image URLs in the response
    return NextResponse.json({
      success: true,
      nature,
      programmers,
      animals,
      people,
      random10,
      queryImages,
    })
  } catch (error) {
    console.error("API Error:", error)

    if (error instanceof GrabPicError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          type: error.type,
        },
        { status: error.statusCode },
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred",
      },
      { status: 500 },
    )
  }
}

