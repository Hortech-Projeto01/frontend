import React from "react";
import { FormItem } from "formik-antd";
import GenericForm from "core/generics/GenericForm";
//import PropTypes from "prop-types";
import { Col, Row, Select } from "antd";

const { Option } = Select;

//Apenas template, options gerado dentro de um plantas.getall.map
function PlantacaoCreateForm() {
    return (
        <GenericForm>
            <>
                <Row gutter={10}>
                    <Col md={8} sm={24}>
                        <FormItem name="planta" label="Planta" required>
                            <Select defaultValue="feijao">
                                <Option value="feijao">Feijao</Option>
                                <Option value="milho">Milho</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="pitaia">Pitaia</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem name="solo" label="Solo">
                            <Select defaultValue="">
                                <Option value="disabled" disabled>
                                    A definir pelo Backend
                                </Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
            </>
        </GenericForm>
    );
}

// PlantacaoCreateForm.propTypes = {
//     initialValues: PropTypes.object,
//     validationSchema: PropTypes.any,
//     onSubmit: PropTypes.func,
// };

export default PlantacaoCreateForm;
