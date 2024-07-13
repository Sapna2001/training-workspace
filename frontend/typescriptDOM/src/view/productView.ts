import IProduct from "../model/product";

class View {
  products: HTMLDivElement;
  productName: HTMLInputElement;
  price: HTMLInputElement;
  productSubmit: HTMLButtonElement;
  id: HTMLInputElement;

  constructor() {
    this.products = <HTMLDivElement>document.querySelector("#products");
    this.productName = <HTMLInputElement>document.querySelector("#productName");
    this.price = <HTMLInputElement>document.querySelector("#price");
    this.id = <HTMLInputElement>document.querySelector("#id");

    this.productSubmit = <HTMLButtonElement>(
      document.querySelector("#productSubmit")
    );
  }

  displayProducts(productsData: IProduct[]) {
    let output = "";
    productsData.forEach((product) => {
      output += `
        <div class="card m-3">
            <div class="card-body">
                <h4 class="card-title"> ${product.productName} </h4>
                <h4 class="card-title"> ${product.price} </h4>
                <h4 class="card-title"> ${product.starRating} </h4>
                <a href="#" class="edit card-link" data-id="${product.productId}">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${product.productId}">
                    <i class="fa fa-remove"></i>
                </a>
            </div>
        </div>
        `;
    });

    this.products.innerHTML = output;
  }

  fillform(data: any) {
    this.productName.value = data.productName;
    this.price.value = data.price;
    this.id.value = data.id;
    this.changeFormState("edit");
  }

  changeFormState(type: string) {
    if (type === "edit") {
      this.productSubmit.textContent = "Update Product";
      this.productSubmit.className = "product-submit btn btn-warning btn-block";

      const button = document.createElement("button");
      button.className = "product-cancel btn btn-success btn-block mt-2";
      button.id = "cancel";
      button.appendChild(document.createTextNode("Cancel Edit"));

      if (!document.getElementById("cancel")) {
        this.productSubmit.parentElement?.appendChild(button);
      }
    }
  }

  originalState() {
    this.productSubmit.textContent = "Add Product";
    this.productSubmit.className = "product-submit btn btn-primary btn-block";

    const cancelButton = <HTMLDivElement>(
      document.querySelector(".product-cancel")
    );

    if (cancelButton && cancelButton.parentNode) {
      cancelButton.parentNode.removeChild(cancelButton);
    }

    this.productName.value = "";
    this.price.value = "";
    this.id.value = "";
  }
}

export default new View();
