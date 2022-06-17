function TableFinalBill() {
  return (
    <>
      <h1> Final Bill </h1>
      <table>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Sub-total</th>
        </tr>
        <tr>
          <td>Yummy Pizza</td>
          <td>3</td>
          <td>$54</td>
        </tr>
        <tr>
          <td>Bitter Coffee</td>
          <td>3</td>
          <td>$24</td>
        </tr>
      </table>

      <table>
        <tr>
          <th scope="row">Sub-Total</th>
          <td>$Subtotal</td>
        </tr>

        <tr>
          <th scope="row">Discounts</th>
          <td>$Discounts</td>
        </tr>

        <tr>
          <th scope="row">Total</th>
          <td>$Total</td>
        </tr>
      </table>

      <p> Thank you for visiting our restaurant. See you again soon!</p>
    </>
  );
}

export default TableFinalBill;
