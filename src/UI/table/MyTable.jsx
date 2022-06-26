import classes from './MyTable.module.scss'



const MyTable = ({labels, data}) => {

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {
           labels[1] && <th></th>
          }
          {
            labels[0].map((item, i) =>
              <th key={i} className={classes.bold}>{item}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((dataRow, i) =>
            <tr key={i}>
              {labels[1] && <td className={classes.bold}>{labels[1][i]}</td>}
              {
                dataRow.map((item, index) =>
                  <td key={index}>{item}</td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default MyTable
