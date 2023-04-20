import Product from "../models/product.js";
import ProductStat from "../models/productStat.js";

export const getProducts = async (req, res) => {
    try {
        //cari product
        const products = await Product.find();

        const productswithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                });
                return {
                    ...product._doc,
                    stat,
                };
            })
        );
        res.status(200).json(productswithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};