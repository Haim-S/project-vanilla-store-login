
const PicRandomShoes = [`https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?cs=srgb&dl=pexels-rujwal-pradhan-10259873.jpg&fm=jpg`, `https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?cs=srgb&dl=pexels-lukas-292998.jpg&fm=jpg`, `https://images.pexels.com/photos/6766352/pexels-photo-6766352.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6766352.jpg&fm=jpg`, `https://images.pexels.com/photos/267280/pexels-photo-267280.jpeg?cs=srgb&dl=pexels-pixabay-267280.jpg&fm=jpg`, `https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?cs=srgb&dl=pexels-lukas-293405.jpg&fm=jpg`, `https://images.pexels.com/photos/4593811/pexels-photo-4593811.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-4593811.jpg&fm=jpg`, `https://images.pexels.com/photos/10210779/pexels-photo-10210779.jpeg?cs=srgb&dl=pexels-rujwal-pradhan-10210779.jpg&fm=jpg`, `https://images.pexels.com/photos/10961742/pexels-photo-10961742.jpeg?cs=srgb&dl=pexels-behrouz-alimardani-10961742.jpg&fm=jpg`, `https://images.pexels.com/photos/6766308/pexels-photo-6766308.jpeg?cs=srgb&dl=pexels-noah-smith-6766308.jpg&fm=jpg`, `https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?cs=srgb&dl=pexels-lukas-292999.jpg&fm=jpg`, `https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?cs=srgb&dl=pexels-gi%C3%A0y-da-tino-2857040.jpg&fm=jpg`];


module.exports = () => {
    return PicRandomShoes[Math.floor(Math.random() * PicRandomShoes.length)]
};