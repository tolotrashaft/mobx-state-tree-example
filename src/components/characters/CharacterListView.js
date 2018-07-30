import { observer } from "mobx-react";
import React from "react";
import { CharacterList } from "../../models/CharacterList";
import CharacterItemView from "./CharacterItemView";
import {
  List,
  CircularProgress,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: CharacterList.create({}),
      searchText: "",
    };
  }

  componentDidMount() {
    this.state.store.load();
  }

  onChangeText = event => {
    this.setState({ searchText: event.target.value });
  };

  get items() {
    return this.state.store.search(this.state.searchText);
  }

  render() {
    const { loading } = this.state.store;

    if (loading) {
      return <CircularProgress />;
    }

    return (
      <div className="list">
        <Input
          onChange={this.onChangeText}
          placeholder="Search character"
          style={styles.searchInput}
          disableUnderline={true}
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />
        <List>
          {this.items.map((item, index) => (
            <CharacterItemView key={index} item={item} />
          ))}
        </List>
      </div>
    );
  }
}

const styles = {
  searchInput: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 16,
    margin: "20px",
    padding: "10px 12px",
    width: "calc(100% - 64px)",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
};

export default observer(CharacterListView);
