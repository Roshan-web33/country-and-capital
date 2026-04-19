const country = [
    {img: 'https://images.unsplash.com/photo-1637750832829-7cc7e0605c15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Afghanistan',
     captital: 'Capital: Kabul'
    },
    {img: 'https://images.unsplash.com/photo-1576709501191-a9ccd791f174?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Albania',
     captital: 'Capital: Tirana'
    },
     {img: 'https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Brazil',
     captital: 'Capital: Brasília'
    },
     {img: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Colombia',
     captital: 'Capital: Bogotá.'
    },
    {img: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'India',
     captital: 'Capital: New Dehli.'
    },
    {img: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Ukraine',
     captital: 'Capital: Kyiv'
    },
    {img: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Russia',
     captital: 'Capital: Moscow'
    },
    {img: 'https://plus.unsplash.com/premium_photo-1697729632037-4cc7ed45c448?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Saudi Arabia',
     captital: 'Capital: Riyadh'
    },
    {img: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     Name: 'Indonesia',
     captital: 'Capital: Jakarta'
    },



]


function Cards (){
    return<>
    <section className="contianer">
        {country.map(val=>(
            <div key={val.id} className="card">
            <img src={val.img} alt="" />
            <h2>{val.Name}</h2>
            <p>{val.captital}</p>
        </div>

        ))}
        
    </section>
    
    </>
}



export default Cards