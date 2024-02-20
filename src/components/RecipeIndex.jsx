
const alpha =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// eslint-disable-next-line react/prop-types
const RecipeIndex = ({alphaIndex}) => {
    return (
        <>
           {
    alpha.map((item, index) => {
        return (
            <h3 key={index} className="w-[50px] h-[40px] bg-black flex justify-center items-center text-white mx-[5px] rounded-md cursor-pointer" onClick={()=>alphaIndex(item)}>{item}</h3>
        );
    })
}

        </>
    );
};

export default RecipeIndex;