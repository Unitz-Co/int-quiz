import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./Table.styles";
import { HEADER } from '../../helpers/constant';
import TableVertical from '../../components/TableVertical/TableVertical';
import TableHorizontal from '../../components/TableHorizontal/TableHorizontal';

const headerItem = HEADER;

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false,
      tableStyle: true // true: Vertical, false: Horizontal
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps.data;

    this.setState({ data: data.advisorProfileCollection.items, loaded: true });
  }

  render() {
    const { classes } = this.props;
    const { data, loaded, tableStyle } = this.state;

    console.log(data);

    return (
      <div>
        {
          loaded && (
            data.length > 0 ? (
                <div>
                    {
                        tableStyle ? 
                          <TableVertical value={HEADER} data={data} loaded={loaded} /> : 
                          <TableHorizontal value={HEADER} data={data} loaded={loaded} />
                    }
                </div>
            ) : <h2>Not Have Data</h2>
          )
        }
      </div>
    );
  }
}
export default withStyles(useStyles)(Table);