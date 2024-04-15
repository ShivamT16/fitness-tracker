export const FoodTracking = () => {
    return(
        <div>
            <h1>Food Tracking</h1>
            <form>
            <input type="text" placeholder="Food Name" />
            <input type="number" placeholder="Calories" />
            <input type="number" placeholder="Protein (grams)" />
            <input type="number" placeholder="Carbohydrates (grams)" />
            <input type="number" placeholder="Fat (grams)" />
            <button>Add New Item</button>
            </form>
        </div>
    )
}