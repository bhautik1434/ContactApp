const initialstate=[
    {
        id:0,
        name:"Bhautik",
        email:"bk143@gmail.com",
        number:23445553
    },
    {
        id:1,
        name:"Bhautik2",
        email:"bk1434@gmail.com",
        number:234455536
    },
];

const contactReducer= (state=initialstate,action)=>{
    switch(action.type){

        case "ADD_CONTACT": 
        state=[...state, action.payload];
        return state;
        default: return state;
    }
};

export default contactReducer;