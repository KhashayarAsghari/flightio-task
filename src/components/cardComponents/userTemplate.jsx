export default function UserTemplate({key,name,desc,price,img}) {
    return (
        <>
            <div className="flex ">
                <img className="w-[100px]" src={img} alt="" />
                <div className="flex flex-col justify-center ml-3">
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-gray-500 text-xs">{desc}</p>
                    <p className="font-bold">{price} $</p>
                </div>
            </div>
        </>
    );
}