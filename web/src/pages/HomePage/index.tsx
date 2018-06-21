import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { BLOCK } from "../../utils/constants";
import Tabs from "./Tabs";

type ClassNames =
  | "actions"
  | "card"
  | "root"
  | "headerRoot"
  | "headerText"
  | "textField";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  actions: {
    display: "flex"
  },
  card: {
    boxShadow: "0px 0px 0px 0px black",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      boxShadow:
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2),\
         0px 2px 2px 0px rgba(0, 0, 0, 0.14),\
         0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
      width: 960
    }
  },
  headerRoot: {
    backgroundColor: theme.palette.primary.dark
  },
  headerText: {
    color: theme.palette.primary.contrastText
  },
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: BLOCK / 2
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

enum SearchState {
  NONE,
  CLASS,
  USER
}

const initialState = {
  search: "",
  state: SearchState.NONE
};

class RecipeReviewCard extends React.Component<
  WithStyles<ClassNames>,
  typeof initialState
> {
  public state = initialState;

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.headerRoot,
              subheader: classes.headerText,
              title: classes.headerText
            }}
            action={
              <IconButton>
                <MoreVertIcon color="secondary" />
              </IconButton>
            }
            title="Catálogo de Matérias - UFV"
            subheader="Escolha por categoria ou use a busca"
          />
          <Tabs />
          <CardContent className={classes.actions}>
            <TextField
              value={
                this.state.state === SearchState.CLASS ? this.state.search : ""
              }
              label="Procurar disciplina"
              placeholder="ex: INF221"
              fullWidth={true}
              margin="normal"
              onChange={this.onChangeClass}
            />
            <span className={classes.textField} />
            <TextField
              value={
                this.state.state === SearchState.USER ? this.state.search : ""
              }
              label="Procurar usuário"
              placeholder="ex: Lucas da Silva"
              fullWidth={true}
              margin="normal"
              onChange={this.onChangeUser}
            />
          </CardContent>
          <Collapse
            in={this.state.state !== SearchState.NONE}
            timeout="auto"
            unmountOnExit={true}
          >
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {this.state.state === SearchState.CLASS
                    ? "Escolha a disciplina"
                    : "Escolha o usuário"}
                </ListSubheader>
              }
            >
              {this.state.state === SearchState.CLASS
                ? this.renderClassList()
                : this.renderUserList()}
            </List>
          </Collapse>
        </Card>
      </div>
    );
  }

  private renderUserList = () => {
    const users = [
      { name: "João da Silva", id: "0" },
      { name: "Maria da Silva", id: "1" },
      { name: "José da Silva", id: "2" },
      { name: "Carla da Silva", id: "3" },
      { name: "Antônia da Silva", id: "4" },
      { name: "Manoel da Silva", id: "5" }
    ];
    return users.map(u => {
      return (
        <ListItem key={u.id} button={true} component="a" href="#simple-list">
          <ListItemText primary={u.name} />
        </ListItem>
      );
    });
  };

  private renderClassList = () => {
    const users = [
      { name: "INF221", id: "0" },
      { name: "INF222", id: "1" },
      { name: "INF223", id: "2" },
      { name: "INF224", id: "3" },
      { name: "INF225", id: "4" },
      { name: "INF226", id: "5" },
      { name: "ECO270", id: "6" }
    ];
    return users.map(u => {
      return (
        <ListItem key={u.id} button={true} component="a" href="#simple-list">
          <ListItemText primary={u.name} />
        </ListItem>
      );
    });
  };

  private onChangeClass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
      state: SearchState.CLASS
    });
  };

  private onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
      state: SearchState.USER
    });
  };
}

export default withStyles(styles)(RecipeReviewCard);