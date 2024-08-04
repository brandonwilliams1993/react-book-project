import "./App.css";
import Card from './components/Card';
import Navbar from './components/Navbar';
import img1 from './images/harry-potter-chamber-of-secrets.jpg';
import img2 from './images/Brave-New-World.jpg';
import img3 from './images/Caged-Bird-Sings.jpg';
import img4 from './images/Catcher-in-the-Rye.jpg';
import img5 from './images/Great-Gatsby.jpg';
import img6 from './images/Jaws.jpg';
import img7 from './images/Pride-and-Prejudice.jpg';
import img8 from './images/Kill-a-Mockingbird.jpg';
import img9 from './images/harry-potter-half-blood-prince.jpg';
import img10 from './images/jurassic-park.jpg';
import img11 from './images/The-Handmaids.jpg';
import img12 from './images/harry-potter-book-prisoner-of-azkaban.jpg';
import img13 from './images/NY-times-logo-large.jpg';
import img14 from './images/audible4.png';
import img15 from './images/Favorite.png';
import img16 from './images/placeholder.jpg';

function App() {
  return (

    <div className="App">
      <Navbar />

      {/* First Row: */}

      <div className="col">
        <Card
          imgSrc={img12}
          imgAlt="Harry Potter and the Prisoner of Azkaban"
          title="Harry Potter and the Prisoner of Azkaban"
          description="Author: J.K. Rowling; Cover design by Olly Moss, 2017"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/import-9781338815283/19690866?ean=9781338815283"
        />

        <Card
          imgSrc={img6}
          imgAlt="Jaws"
          title="Jaws"
          description="Author: Peter Benchley; Cover design by Paul Bacon, 1974"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/jaws-peter-benchley/15279162?ean=9780345544148"
        />

        {/* <Card
          title="NY Times Best Sellers List:"
          imgAlt="NY Times Best Sellers List"
          imgSrc={img13}
          description="List of the Best Sellers from 'The New York Times'"
          buttonText="Learn More"
          link="https://www.nytimes.com/books/best-sellers/"
        /> */}

        <Card
          imgSrc={img5}
          imgAlt="The Great Gatsby"
          title="The Great Gatsbys"
          description="Author: F. Scott Fitzgerald; Cover art by Francis Cugat, 1925"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/the-great-gatsby-f-scott-fitzgerald/18533627?ean=9780743273565"
        />

      </div>

      {/* Second Row: */}

      <div className="col">

        <Card
          imgSrc={img7}
          imgAlt="Pride and Prejudice"
          title="Pride and Prejudice"
          description="Author: Jane Austen; Cover design by Hugh Thomson, 1894"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/pride-and-prejudice-jane-austen/15657135?ean=9780141439518"
        />

        <Card
          imgSrc={img3}
          imgAlt="I Know Why the Caged Bird Sings"
          title="I Know Why the Caged Bird Sings"
          description="Author: Maya Angelou, Cover design by Janet Halverson, 1969"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/i-know-why-the-caged-bird-sings-maya-angelou/8496752?ean=9780375507892"
        />

        <Card
          imgSrc={img10}
          imgAlt="Jurassic Park"
          title="Jurassic Park"
          description="Author: Michael Crichton; Cover design by Chip Kidd, 1990"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/jurassic-park-michael-crichton/14708249?ean=9780345538987"
        />

      </div>

      {/* Third Row: */}

      <div className="col">

        <Card
          imgSrc={img1}
          imgAlt="Harry Potter and the Chamber of Secrets"
          title="Harry Potter and the Chamber of Secrets"
          description="Author: J.K. Rowling; Cover design by Olly Moss, 2016"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/harry-potter-and-the-chamber-of-secrets-minalima-edition-illustrated-edition-volume-2-j-k-rowling/15063913?ean=9780439064866"
        />

        <Card
          imgSrc={img4}
          imgAlt=" The Catcher in the Rye"
          title=" The Catcher in the Rye"
          description="Author: J.D. Salinge; Cover design by E. Michael Mitchell, 1951"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/the-catcher-in-the-rye-j-d-salinger/114571?ean=9780316769488"
        />

        <Card
          imgSrc={img2}
          imgAlt="Brave New World"
          title="Brave New World"
          description="Author: Aldous Huxley, Cover design by Leslie Holland, 1932"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/brave-new-world-aldous-huxley/18711990?ean=9780060850524"
        />

      </div>

      <div className="col">

        <Card
          // imgSrc={img16}
          imgAlt="Favorites List"
          title="Favorites List:"
          buttonText="View Favorites"
          link="https://google.com"
        />

        <Card
          // imgSrc={img16}
          imgAlt="Book Catologs"
          title="Book Catologs:"
          buttonText="View Catologs"
          link="https://google.com"
        />

        <Card
          imgSrc={img14}
          title="Audible.com"
          imgAlt="Audible.com"
          description="Online audiobook and podcast service"
          buttonText="View Here"
          link="https://www.audible.com/"
        />

        <Card
          imgSrc={img13}
          title="NY Times Best Sellers List"
          imgAlt="NY Times Best Sellers List"
          description="Authoritatively ranked lists of Best Seller books, from 'The New York Times'"
          buttonText="View Here"
          link="https://www.nytimes.com/books/best-sellers/"
        />

        <Card
          imgSrc={img11}
          imgAlt="The Handmaids Tale"
          title="The Handmaids Tale"
          description="Author: Margaret Atwood, Cover design by Fred Marcellino, 1986"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/brave-new-world-aldous-huxley/18711990?ean=9780060850524"
        />

      </div>

      {/* Fourth Row: */}

      {/* <div className="col">
      <Card
          imgSrc={img2}
          imgAlt="Brave New World"
          title="Brave New World"
          description="Author: Aldous Huxley, Cover design by Leslie Holland, 1932"
          buttonText="Learn More"
          link="https://bookshop.org/p/books/brave-new-world-aldous-huxley/18711990?ean=9780060850524"
        />
      </div> */}

    </div>
  );
};

export default App;
