import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import MailIcon from 'material-ui-icons/Mail';
class Notifications extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <Badge badgeContent={2} color="primary">
            <MailIcon />
          </Badge>

        </IconButton>
      
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Commande extrait livrée pour B112233</MenuItem>
          <MenuItem onClick={this.handleClose}>Demande de dépot refusée pour immatriculation Contoso S.A</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Notifications;
