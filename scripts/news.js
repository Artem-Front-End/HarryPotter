const newsArr = [
    {img: './images/news/news1.jpg', title: 'JK Rowling condemns ‘activists’ for leaking home address on Twitter',  href: 'https://www.independent.co.uk/arts-entertainment/books/news/jk-rowling-twitter-b1962281.html' },
    {img: './images/news/news2.jpg', title: 'Emma Watson sends emotional message to Harry Potter fans',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/harry-potter-emma-watson-reunion-b1959257.html' },
    {img: './images/news/news3.jpg', title: 'Harry Potter cast to reunite for 20th anniversary TV special',  href: 'https://www.independent.co.uk/arts-entertainment/tv/news/harry-potter-reunion-return-to-hogwarts-b1959063.html' },
    {img: './images/news/news5.jpg', title: 'Harry Potter director backs release of 3-hour cut with one key change',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/harry-potter-deleted-scenes-peeves-b1958601.html' },
    {img: './images/news/news6.jpg', title: 'Daniel Radcliffe names who he would play in a Harry Potter reboot',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/harry-potter-daniel-radcliffe-reboot-b1895799.html' },
    {img: './images/news/news7.jpg', title: 'Owner of Scholastic leaves $1.2bn Harry Potter fortune for lover',  href: 'https://www.independent.co.uk/news/world/americas/scholastic-robinson-death-harry-potter-b1894958.html' },
    {img: './images/news/news8.jpg', title: 'Ralph Fiennes improvised chilling moment in Harry Potter scene',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/harry-potter-voldemort-ralph-fiennes-b1885244.html' },
    {img: './images/news/news9.jpg', title: 'Harry Potter first edition signed by JK Rowling sells for huge sum',  href: 'https://www.independent.co.uk/arts-entertainment/art/news/harry-potter-rowling-auction-sale-b1893037.html' },
    {img: './images/news/news10.jpg', title: 'Tom Felton sums up nation’s mood after England’s Euro 2020 defeat',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/tom-felton-instagram-england-italy-b1882363.html' },
    {img: './images/news/news11.jpg', title: 'Daniel Radcliffe recalls ‘craziest’ Harry Potter stunt he’s ever done',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/daniel-radcliffe-harry-potter-stunt-b1881381.html' },
    {img: './images/news/news12.jpg', title: 'Harry Potter star Jessie Cave opens up about gaining weight in filming',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/jessie-cave-harry-potter-lavender-b1874878.html' },
    {img: './images/news/news13.jpg', title: 'Tom Felton shares throwback photo celebrating Emma Watson’s birthday',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/harry-potter-tom-felton-emma-watson-b1832541.html' },
    {img: './images/news/news14.jpg', title: 'Matthew Lewis says he gets ‘frustrated’ by Harry Potter references',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/matthew-lewis-harry-potter-neville-longbottom-b1823774.html' },
    {img: './images/news/news15.jpg', title: 'Rupert Grint has never seen most of the Harry Potter films',  href: 'https://www.independent.co.uk/arts-entertainment/films/news/rupert-grint-harry-potter-ron-weasley-b1798096.html' },
];

const newsList = document.querySelector('.newsList');

newsArr.map(item => {
    return newsList.innerHTML += `
        <li class="news_block" >
           <img src="${item.img}" />
           <div class="news_item" >
              <h2>News</h2>
              <h3><a href="${item.href}" >${item.title}</a></h3>
           </div>
        </li>
    `
})