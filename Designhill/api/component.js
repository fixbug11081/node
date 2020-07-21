//jshint esversion:6


class ListProducts extends ReactComponent{
  render(){
    return "<table>
      <th>Product name</th>
      <th>Sku code</th>
      <th>Price</th>
      <th>Product name</th>
      <th>Add to Cart</th>
      <tr>Product name</tr>
      <tr>Sku code</tr>
      <tr>Price</tr>
      <tr>Product name</tr>
      <tr>Add to Cart</tr>
    </table>";
  }
}

ReactDom.render(<ListProducts />,document.getElementById('list'));
