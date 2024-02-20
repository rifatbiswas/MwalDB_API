import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

let vID = "";

const RecipeInfo = () => {
    const { MealId } = useParams();
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        if (MealId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then(res => res.json())
                .then(data => {
                    setMealData(data.meals[0]);
                })
                .catch(error => {
                    console.error('Error fetching meal data:', error);
                });
        }
    }, [MealId]);
    
    if(mealData){
        const url = mealData.strYoutube;
        const str= url.split("=");
        vID=str[str.length-1]
    }

    return (
        <>
            {
                (!mealData)?"" : (
                    <>
                    <div>
                        <img src={mealData.strMealThumb} alt="" className='w-full h-[700px]' />
                        <div className='absolute top-[40%] left-[50%] translate-[-50%, -50%] bg-white text-black text-2xl p-8 text-center shadow-md'>
                            <h1 className='text-3xl font-bold'>{mealData.strMeal}</h1>
                            <h2>{mealData.strArea} Food</h2>
                            <h3>Category: {mealData.strCategory}</h3>
                        </div>
                    </div>
                    <div className='w-[70%] mt-8 mx-auto   '>
                        <div className='flex flex-col justify-between text-xl text-center'>
                            <h2 className='mb-6 text-3xl font-bold'>Ingredients</h2>
                            <h4>{mealData.strIngredient1} : {mealData.strMeasure1}</h4>
                            <h4>{mealData.strIngredient2} : {mealData.strMeasure2}</h4>
                            <h4>{mealData.strIngredient3} : {mealData.strMeasure3}</h4>
                            <h4>{mealData.strIngredient4} : {mealData.strMeasure4}</h4>
                            <h4>{mealData.strIngredient5} : {mealData.strMeasure5}</h4>
                            <h4>{mealData.strIngredient6} : {mealData.strMeasure6}</h4>
                            <h4>{mealData.strIngredient7} : {mealData.strMeasure7}</h4>
                            <h4>{mealData.strIngredient8} : {mealData.strMeasure8}</h4>
                            
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>Instruction</h2>
                            <h4 className='mt-6 text-xl'>{mealData.strInstructions}</h4>
                        </div>
                        <div>
                            <iframe src={`https://www.youtube.com/embed/${vID}`} className='h-[520px] w-[80%] my-12 mx-auto '>
                                
                            </iframe>
                        </div>
                    </div>
                    </>
                )
            }
        </>
    );
};

export default RecipeInfo;
