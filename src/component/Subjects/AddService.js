import React from 'react';

const AddService = () => {
    const handleAddservice = event => {
        event.preventDefault()
        const form = event.target
        const topic = form.topic.value
        const rating = form.rating.value
        const img = form.img.value
        const price = form.price.value
        const text = form.text.value
        console.log(topic, rating, price, img, text)
        const subject = {
            topic,
            rating,
            price,
            img,
            text
        }
        fetch('http://localhost:5000/subject', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subject)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                }
            })
            .catch(er => console.error(er))
        console.log('vai pais')

    }
    return (
        <div className='text-center'>
            <h2 className='text-3xl'>Add A Service</h2>
            <form onSubmit={handleAddservice}>

                <div className='grid grid-cols-1 mx-40'>
                    <input type="text" name='topic' placeholder='topic' className='p-4 text-lg rounded-sm my-3 border border-stone-700' />
                    <input type="text" name='rating' placeholder='rating' className='p-4 text-lg rounded-sm my-3 border border-stone-700' />
                    <input type="text" name='img' placeholder='Image' className='p-4 text-lg rounded-sm my-3 border border-stone-700' />
                    <input type="text" name='price' placeholder='Price' className='p-4 text-lg rounded-sm my-3 border border-stone-700' />
                </div>
                <div>
                    <textarea name="text" className='border border-stone-700 placeholder:' cols="90" rows="5"></textarea>
                </div>

                <button className='btn btn-primary text-center my-4'>
                    <input type="submit" value="Add a Subject " />
                </button>
            </form>

        </div>
    );
};

export default AddService;