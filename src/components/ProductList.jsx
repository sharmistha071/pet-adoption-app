import { useState } from 'react'

const Search = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="search here"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

const ProductTable = ({ products, filterText }) => {
  // const renderTableRows = () => {
  //   const filterList = products.filter(
  //     (item) => item.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
  //   )
  //   const productsCategoryList = [
  //     ...new Set(filterList.map((product) => product.category)),
  //   ]
  //   return productsCategoryList?.map((category) => {
  //     return (
  //       <>
  //         <h2>{category}</h2>
  //         {filterList
  //           .filter((item) => item.category === category)
  //           .map((item) => (
  //             <tr>
  //               <th>{item.name} </th>
  //               <th>{item.price}</th>
  //             </tr>
  //           ))}
  //       </>
  //     )
  //   })
  // }

  const renderTableRows1 = () => {
    console.log('products', products, filterText)
    const filterList = products.filter(
      (item) => item.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    )
    console.log('filterList', filterList)
    const categoryList = [...new Set(filterList.map((item) => item.category))]
    console.log('categoryList', categoryList)

    return categoryList.map((category) => {
      return (
        <>
          <h2>{category}</h2>
          {filterList
            .filter((item) => item.category === category)
            .map((item) => (
              <tr>
                <th>{item.name}</th>
                <th>{item.price}</th>
              </tr>
            ))}
        </>
      )
    })
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderTableRows1()}</tbody>
      </table>
    </>
  )
}

const ProductList = ({ products }) => {
  const [searchText, setSearchText] = useState('')
  console.log('searchText', searchText)
  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <ProductTable products={products} filterText={searchText} />
    </>
  )
}
export default ProductList
