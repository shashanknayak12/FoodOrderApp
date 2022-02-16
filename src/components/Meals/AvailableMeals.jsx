import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'



function AvailableMeals() {
    const [meals, setMeals] = useState([])

    useEffect(() => {

        const fetchMeals = async () => {
            const response = await fetch('https://react-http-1ce8c-default-rtdb.firebaseio.com/Meals.json')
            const responseData = await response.json()

            const loadedMeals = []

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals)
        }

        fetchMeals()
    }, [])



    return (
        <section className={styles.meals}>
            <Card >
                <ul >
                    {meals.map(eachMeal => {
                        return (
                            <MealItem
                                id={eachMeal.id}
                                key={eachMeal.id}
                                name={eachMeal.name}
                                description={eachMeal.description}
                                price={eachMeal.price}
                            />
                        )
                    })}
                </ul>
            </Card>

        </section >

    );
}

export default AvailableMeals;