const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive ya dodo!"],
    /**
     * TODO
     * this will show an error message like  "Price must be positive ya dodo!"😎😎
     */
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});
/**
 * ?
 * instance methods ella instance ilum available aya methodine denote cheyyunnu e.g newProduct.save()
 * ?
 * static method aa classilil available aya methodine denote cheyyunnu
 * ? e.g productData.find()
 *
 *
 */

/**
 * todo
 * below commented code is a instance method
 */
// productSchema.methods.greet = function () {
//     console.log("HELLLO!!! HI!! HOWDY!!! ")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};
/**
 * TODO
 * nammal mukalil return koduthadu kondannu namukk line 92 vill promise ne await cheyyaan pattunnadhu.
 * !
 * Nammal promise ne 71 LL return cheyyunnu
 * TODO
 * if we wish we can also give toggleOnSale method on every foundProduct(Line(95-)) but for accessing on every instances we put it on our model.
 */

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

// Product.fireSale().then(res => console.log(res))

// findProduct();

/**
 * ?
 * Below code will show error because of invalid size
 */
// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

/**
 * !
 * runValidators:true ennu koduthillenkil update cheyyunna samayth mongodb validation work cheyyilla
 */
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })
