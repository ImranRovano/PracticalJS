//let root = document.getElementsByClassName('root')[0];

//root.getElementsByClassName.background = "url('https://wallpaperaccess.com/full/636909.jpg')";
//console.log(root)
/*
let number = 636909;
root.getElementsByClassName.cssText =
`
background: url('https://wallpaperaccess.com/full/${number}.jpg');
background-size: cover;
background-position: center;
`;
*/
//console.log(document);
let data = {
    fullName: 'Jennifer Smith',
    position: 'UX/UI Designer',
    socials: [
        {
            id: 'fb',
            sevice: 'Facebook',
            url: 'https://www.facebook.com/jsmith24',
            icon: 'fab fa-facebook-f'
        },
        {
            id: 'ig',
            service: 'Instagram',
            url: 'https://www.instagram.com/jsmith24',
            icon: 'fab fa-instagram'
        },
        {
            id: 'db',
            service: 'Dribbble',
            url: 'https://www.dribbble.com/jsmoth24',
            icon: 'fab fa-dribbble'
        },
        {
            id: 'gl',
            service: 'Google',
            url: 'https://www.google.com/jsmith',
            icon: 'fab fa-dribbble'
        }
    ]
}
//let fullName = 'Jennifer Smith';
//let position = 'UX/UI Designer'
let style = document.createElement('style')
let root = document.createElement('div');
let body = document.getElementsByTagName('body')[0]
let card = document.createElement('section');
let html = `
<div class="card__wrapper">
    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg" class="card__user-img">
    <div class="card__info">
    `/*<span class="card__name">${fullName}</span>
    <span class="card__title">${position}</span>*/`
    <span class="card__name">${data.fullName}</span>
    <span class="card__title">${data.position}</span>
    </div>
    <div class="card__socials">
    `/*<div class="card__icon card__icon--fb">
        <span class="card__icon-box">
            <i class="fab fa-facebook-f"></i>
        </span>
        <span class="card__icon-title">
            Facebook
        </span>
    </div>
    <div class="card__icon card__icon--ig">
        <span class="card__icon-box">
            <i class="fab fa-instagram"></i>
        </span>
        <span class="card__icon-title">
            Instagram
        </span>
    </div>
    <div class="card__icon card__icon--db">
        <span class="card__icon-box">
            <i class="fab fa-dribbble"></i>
        </span>
        <span class="card__icon-title">
            Dribbble
        </span>
    </div>*/`
    </div>
</div>
`;
let cssStyles = `
.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
  }
  .card__wrapper{
    height: 400px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card__user-img{
    border: 2px solid #2c5eff;
    height: 70px;
    width: 70px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .card-info{
    margin-bottom: 2rem;
  }
  .card__name{
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
  }
  .card__title{
    display: block;
    font-size: .7rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .card__icon{
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    transition: background .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
  }
  .card__icon-box{
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card__icon-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .card__icon--fb{
    color: #2c5eff;
    border: 1px solid #2c5eff;
  }
  .card__icon--fb:hover{
    background: #2c5eff;
    color: white;
  }
  .card__icon--ig{
    color: #773fe7;
    border: 1px solid #773fe7;
  }
  .card__icon--ig:hover{
    background: #773ef7;
    color: white;
  }
  .card__icon--db{
    color: #f962b1;
    border: 1px solid #f962b1;
  }
  .card__icon--db:hover{
    background: #f962b1;
    color: white;
  }
  `;
body.prepend(root);
root.classList.add('root');
card.classList.add('card');
root.prepend(card);
root.style.cssText =`
background: url('https://wallpaperaccess.com/full/636909.jpg');
background-size: cover;
background-position: center;
`;
//document.getElementsByClassName('card')[0].innerHTML = html;
root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;
let cardSocials = card.getElementsByClassName('card__socials')[0];
let temp = `
<div class="card__icon card__icon--fb">
    <span class="card__icon-box">
        <i class="fab fa-facebook-f"></i>
    </span>
    <span class="card__icon-title">
        Facebook
    </span>
</div>
`;  

// "item" is being used as an argument. basically an empty variable. the forEach loop will use the argument as a variable to loop through "data's" array
data.socials.forEach((item, index) => {
    temp = document.createElement('div')
    temp.classList.add('card__icon', `card__icon--${item.id}`)
    temp.innerHTML = `
    <span class="card__icon-box">
        <i class="${item.icon}"></i>
    </span>
    <span class="card__icon-title">
        ${item.service}
    </span>
    `;
    console.log(cardSocials)
    // cardSocials.append(tempNode)
});
console.log(card)









