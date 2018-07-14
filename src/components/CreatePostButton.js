import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { message } from 'antd/lib/index'
import $ from 'jquery'
import { WrappedCreatePostForm } from './CreatePostForm'
import { AUTH_PREFIX, POS_KEY, TOKEN_KEY, API_ROOT, LOC_SHAKE} from '../constants'

export class CreatePostButton extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({confirmLoading: true});
    this.form.validateFields((err, values) => {
      const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
      const formData = new FormData();
      formData.set('lat', lat + Math.random() * LOC_SHAKE * 2 - LOC_SHAKE);
      formData.set('lon', lon + Math.random() * LOC_SHAKE * 2 - LOC_SHAKE);
      formData.set('message', values.message);
      formData.set('image', values.image[0].originFileObj);

      if (!err) {
        $.ajax({
          url: `${API_ROOT}/post`,
          method: 'POST',
          data: formData,
          headers: {
            Authorization: `${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`
          },
          processData: false,
          contentType: false,
          dataType: 'text',
        }).then((response) => {
          message.success('Created a post successfully!');
          this.form.resetFields();
          this.setState({ visible: false, confirmLoading: false});
          this.props.loadNearbyPosts();
        }, (response) => {
          message.error(response.responseText);
          this.setState({ confirmLoading: false});
        }).catch((e) => {
          console.log(e);
        });
      }
    });
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal title="Create New Post"
               visible={visible}
               onOk={this.handleOk}
               okText="Create"
               confirmLoading={confirmLoading}
               onCancel={this.handleCancel}
        >
          <WrappedCreatePostForm ref={this.saveFormRef}/>
        </Modal>
      </div>
    );
  }
}