import products from "./products.json";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { itemID } = await req.body;
    console.log("itemid", itemID);

    if (!itemID) {
      return res.status(400).send("Missing itemID");
    }

    const product = products.find((p) => p.id === itemID);
    console.log(product);

    if (product) {
      const { hash, filename } = product;
      return res.status(200).send({ hash, filename });
    } else {
      return res.status(404).send("Item not found");
    }
  } else {
    return res.status(405).send(`Method ${req.method} not allowed`);
  }
}
