function ListItem(props: { animal: string }) {
    return <li>{props.animal}</li>;
}

function List(props: { animalList: string[] }) {

    if (!props.animalList) {
        return <div>Loading...</div>
    }
    if (props.animalList.length === 0) {
        return <div>No animals found</div>;
    }
    
    return(
        <ul>
            {props.animalList.map((animal  => {
                return <ListItem key={animal} animal ={animal} />
            }))}
        </ul>
    )
}

function Animals() {
    const animals: string[] = ['Bear',"Lion","Tigger","Piglet","Eeyore","Roo","Kanga","Owl","Rabbit","Gopher","Christopher Robin","Pooh"];

    return (
        <>
            <h1>Animals:</h1>
            <List animalList={animals} />
        </>
    )
}

export default Animals