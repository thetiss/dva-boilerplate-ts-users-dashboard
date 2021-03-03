import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
const UserModal = ( { visible } ) => {
    const FormItem = Form.Item;
    return(
        <div>
            <Modal
                visible={visible}
            >
                <Form>
                    <FormItem>
                        <Input name='name' />
                    </FormItem>
                    <FormItem>
                        <Input name='email' />
                    </FormItem>
                </Form>
            </Modal>
        </div>
    )
};
export default UserModal;