import React from 'react';
import Card from './Card';
import "./Catalog.css";


function Catalog() {
  return (
<div className="col">

                  <Card
                    // imgSrc={img12}
                    imgAlt="Harry Potter and the Prisoner of Azkaban"
                    title="Harry Potter and the Prisoner of Azkaban"
                    description="Author: J.K. Rowling; Cover design by Olly Moss, 2017"
                    buttonText="Learn More"
                    link="https://bookshop.org/p/books/import-9781338815283/19690866?ean=9781338815283"
                  />
                  <Card
                    // imgSrc={img6}
                    imgAlt="Jaws"
                    title="Jaws"
                    description="Author: Peter Benchley; Cover design by Paul Bacon, 1974"
                    buttonText="Learn More"
                    link="https://bookshop.org/p/books/jaws-peter-benchley/15279162?ean=9780345544148"
                  />
                  <Card
                    // imgSrc={img5}
                    imgAlt="The Great Gatsby"
                    title="The Great Gatsby"
                    description="Author: F. Scott Fitzgerald; Cover art by Francis Cugat, 1925"
                    buttonText="Learn More"
                    link="https://bookshop.org/p/books/the-great-gatsby-f-scott-fitzgerald/18533627?ean=9780743273565"
                  />

                </div>
  );
};

export default Catalog;
