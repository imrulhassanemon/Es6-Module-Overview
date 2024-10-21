
const Watch = ({watch}) => {
    const {name, price} = watch;
    console.log(watch.id);
    return (
        <div>
            <h3>Watches : {name} </h3>
            <p>Price : {price}</p>
        </div>
    );
};

export default Watch;