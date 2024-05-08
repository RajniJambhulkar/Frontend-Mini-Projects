function List(){
    const fruits = [{name: 'apple', calories:95}, 
    {name:'orange', calories:45},
    {name:'mango', calories:105},
    {name:'banana', calories:37}];
    
    // fruits.sort((a,b)=>  a.name.localeCompare(b.name));//to compare strings
    fruits.sort((a,b)=> a.calories-b.calories);//to compare numbers
    const lowCalFruits = fruits.filter(fruit => fruit.calories>50);
    const listItems = lowCalFruits.map(fruit => <li key={fruit.name}>{fruit.name}:&nbsp;{fruit.calories}</li>);
    
    return(
        <ol>
        {listItems}
        </ol>
    )
}
export default List