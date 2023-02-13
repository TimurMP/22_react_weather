import React from 'react';

const apiKey = `f498116a16635e4e2de17900114d9e8a`;
const Form = () => {
    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
        // console.log(city);
        fetch(geocodingUrl)
            .then(res => res.json())
            .then(c => {
                let lat = c[0].lat;
                let lon = c[0].lon;
                const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                fetch(currentWeatherUrl)
                    .then(w => w.json())
                    .then(result => {
                        // console.log(result)
                        console.log(`City: ${result.name}`);
                        console.log(`Temperature: ${result.main.temp}`);
                        console.log(`Pressure: ${result.main.pressure}`);
                    })
            })

    }


    return (
        <form onSubmit={getCity}>
            <input type={'text'} name={'city'} placeholder={'City'}/>
            <button type={"submit"}>Get Weather</button>


        </form>
    );
};

export default Form;