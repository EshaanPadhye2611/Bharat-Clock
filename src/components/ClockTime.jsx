let ClockTime = () => {

    let currenTime = new Date();
    return <p>This is the current time :{currenTime.toLocaleDateString()} - {currenTime.toLocaleTimeString()}</p>;
};
export default ClockTime;