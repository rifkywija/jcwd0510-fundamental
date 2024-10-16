
/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"

    ===============================
    
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

// 1
function phoneNumber(input) {

    if (typeof input !== 'string') { //mengecek tipe inputnya
        return "Invalid phone number";
    }

    if (input.length !== 12) { // mengecek berapa panjang karakter input 
        return "Invalid phone number";
    }

    if (!/^\d+$/.test(input)) { //mengecek apakah semua karakter input adalah angka
        return "Invalid phone number";
    }

    if (input[0] === '0') {
        input = '62' + input.slice(1);
    } else {   //mengganti awalan "0" dengan "62"
        return "Invalid phone number";
    }

    const formattedNumber = `(${input.slice(0, 4)})-${input.slice(4, 8)}-${input.slice(8)}`; //memformat nomor telepon

    return formattedNumber;
}

console.log(phoneNumber("085211155555"));


// 2
class Product{
    nama: string;
    berat: number;
    price:number;
    stok:number

    constructor(nama:string,berat:number,price:number,stok:number){
        this.nama = nama;
        this.berat = berat;
        this.price = price;
        this.stok = stok;
    }
}

class Buku extends Product{
    penulis: string;
    jumlahHalaman: number;

    constructor(nama:string,berat:number,price:number,stok:number,penulis:string,jumlahHalaman:number){
        super(nama,berat,price,stok);
        this.penulis= penulis;
        this.jumlahHalaman= jumlahHalaman;
    }
}

class Pakaian extends Product{
    ukuran: string;
    bahan:string;

    constructor(nama:string,berat:number,price:number,stok:number,ukuran:string,bahan:string){
        super(nama,berat,price,stok);
        this.ukuran= ukuran;
        this.bahan= bahan;
    }
}

class OnlineShop{
    private cart: {produk:Product;jumlah:number}[]= [];
    products: Product[]= [];

    tambahProduk(produk:Product): string{
        const existingProduct = this.products.find(p => p.nama === produk.nama)
        if (existingProduct){
            return "Produk sudah ada dalam toko";
        }
        this.products.push(produk);
        return "Produk berhasil ditambahkan";
    }

    tambahKeKeranjang(produkNama: string,jumlah: number):string{
        const produk = this.products.find(p => p.nama === produkNama);

        if(!produk){
            return"Produk tidak ditemukan di catalog";
        }

        if(jumlah > produk.stok){
            return `Stok tidak mencukupi.Stok saat ini : ${produk.stok}`;
        }

        const existingItem = this.cart.find(item=> item.produk.nama === produkNama);

        if (existingItem){
            return "Produk sudah ada dalam keranjang";
        }

        this.cart.push({produk,jumlah});
        return " Produk berhasil ditambahkan ke keranjang";
    }

    transaksi (uangUser:number,jarak:number):string{
        const ongkir= jarak * 2000

        let totalBelanja = this.cart.reduce((total,item)=> total + (item.produk.price * item.jumlah),0);

        const totalPembayaran = totalBelanja + ongkir;

        if(uangUser < totalPembayaran){
            return"Uang tidak mencukupi untuk transaksi";
        }
        const kembalian= uangUser-totalPembayaran;

        this.cart.forEach(item => {
            item.produk.stok -= item.jumlah;
        });

        this.cart =[];
        return `Total pembayaran: ${totalPembayaran}.Kembalian: ${kembalian}`;
    }

    showCatalog(): string{
        if(this.products.length === 0){
            return"Katalog toko kosong";
        }
        return this.products.map(p=> `${p.nama}-Price:${p.price}- Stok${p.stok}`).join(',');
    }
    showCart(): string{
        if(this.cart.length === 0){
            return "Keranjang kosong";
        }
        return this.cart.map(item => `${item.produk.nama}- jumlah: ${item.jumlah}`).join(',')
    }
}

const shop = new OnlineShop();

const buku1 = new Buku("Buku Pemrogaman",0.5,10000,10,"John Doe",300);
const pakaian1 = new Pakaian ("Kaos",0.2,50000,20,"L","Katun");

console.log(shop.tambahProduk(buku1));
console.log(shop.tambahProduk(pakaian1));

console.log(shop.showCatalog());

console.log(shop.tambahKeKeranjang("Buku Pemrogaman",2));
console.log(shop.tambahKeKeranjang("Kaos",5));

console.log(shop.showCart());

console.log(shop.transaksi(500000,5));

console.log(shop.showCatalog());

console.log(shop.showCart());


