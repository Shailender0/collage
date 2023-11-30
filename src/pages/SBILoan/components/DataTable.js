import React from "react";

class DataTable extends React.Component {
  constructor() {
    super();
    // Sample data for the table
    this.state = {
      data: [

        ["Applicable Rate of Interest", "DUp to INR 7.50 Lacs: 10.55%Above INR 7.50 Lacs: 10.80%", "Up to INR 7.5 Lacs: MCLR + 2.00%above INR 7.5 Lacs: 2.60%", "Up to INR 7.5 Lacs: MCLR + 2.00%above INR 7.5 Lacs: 2.60%", "", ],

        ["Max Loan with Collateral", "For India: 10 Lacs For Abroad: 20 Lacs", "For India: 10 Lacs For Abroad: 20 Lacs", "For India: 10 Lacs For Abroad: 20 Lacs", "", ],

        ["Max loan without collateral",  "For India: 10 Lacs For Abroad: 20 Lacs", "For India: 10 Lacs For Abroad: 20 Lacs", "For India: 10 Lacs For Abroad: 20 Lacs", "", ],

        ["Processing Fee", "Up to INR 4 Lacs: Nil Above INR 4 Lacs: INR 5000", "NIL", "NIL", "", ],

        ["Repayment Period", "15 years", "15 years", "15 years", "", ],

        ["Loan for top institutions", "Yes, SBI Scholar Loan Scheme", "Yes, PNB Pratibha", "Yes, PNB Pratibha", "", ],
      ],
    };
  }

  renderTableHeader() {
    // Headers for the table
    return (
        <>
        <tr style={{ height:"60%",border: "2px solid #dddddd",color: '# 210366', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', padding: 8 }}>  PopulorBanks:  <th>SBI</th> <th>PNB</th> <th>HDC</th></tr>
      <tr>
       
        <th
          style={{ height:"40%",border: "2px solid #dddddd", textAlign: "centre",color: '#210366', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', padding: 8 }}
        >
        Bank/Financer
        </th>
        <th style={{ height:"40%", border: "2px solid #dddddd", textAlign: 'center', color: '#FF7900', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word', padding: 10 }}>
        <img
                  style={{ width: 70, height: 20,marginRight:"1rem" }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png "
                  alt=""
                />   
            Change  bank</th>
        <th style={{height:"40%", border: "2px solid #dddddd", textAlign: 'center', color: '#FF7900', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word', padding: 10 }}> <img
                  style={{ width: 70, height: 20,marginRight:"1rem" }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png "
                  alt=""
                />Change  bank</th>
        <th style={{height:"40%", border: "2px solid #dddddd", textAlign: 'center', color: '#FF7900', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word', padding: 10 }} >
             <img
                  style={{ width: 70, height: 20 ,marginRight:"1rem"}}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png "
                  alt=""
                />Change  bank</th>
        <th style={{ height:"40%",border: "2px solid #dddddd", textAlign: 'center', color: '#FF7900', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500',   padding: 10 }}>
            
            ADD Bank</th>
        
      </tr>
      </>
    );
  }

  renderTableData() {
    // Render table rows and data
    return this.state.data.map((rowData, rowIndex) => (
      <tr key={rowIndex} style={{ height:100,textAlign:"center",color: '#210366', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>
        {rowData.map((cellData, cellIndex) => (
          <td key={cellIndex} style={{ border: "2px solid #dddddd", textAlign: "centre", padding: 8 }}>{cellData}</td>
        ))}
      </tr>
    ));
  }

  render() {
    return (
      <div>
        
        <table  style={{borderCollapse: 'collapse',
  width: '100%',marginTop:"2rem"}}>
    
          <thead  style={{  textAlign: "centre", padding: 8 }}>{this.renderTableHeader()}</thead>
          <tbody  style={{ textAlign: "centre", padding: 8 }}>{this.renderTableData()}</tbody>
        </table>

        <div style={{textAlign: 'center', color: '#FF7900', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Show more</div>
      </div>

      
    );
  }
}

export default DataTable;
