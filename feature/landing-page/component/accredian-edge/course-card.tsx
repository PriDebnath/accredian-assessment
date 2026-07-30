import Image, { StaticImageData } from "next/image";

interface Props {
    title: string; des: string; image: StaticImageData
}
export default function CourseCard(props: Props) {
    const { image, title, des } = props
    return (
        <div className="group overflow-hidden rounded-lg border-2 bg-white shadow-md transition-all duration-300   hover:shadow-xl"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="px-8 py-5 pb-8 text-center ">
                <h3 className="text-2xl py-2 font-semibold text-primary text-nowrap">
                    {title}
                </h3>
                <p className="text-xs text-gray-700">
                    {des}
                </p>
            </div>
        </div>
    )
}