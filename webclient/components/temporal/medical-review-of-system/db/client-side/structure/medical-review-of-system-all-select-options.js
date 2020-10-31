import clientTblManage from '~/components/framework/crud/manage-rows-of-table-in-client-side-orm.js'
import medicalReviewOfSystemForPatientClass from './medical-review-of-system-of-a-patient-table.js'

const { v1: uuidv1 } = require('uuid')
let count = 0
const intUniqueId = () => ++count

export default class medicalReviewOfSystemAllSelectOptions extends clientTblManage {
  static entity = 'tblmedicalReviewOfSystemAllSelectOptions'

  static apiUrl = 'http://localhost:8000/public/api/medical-review-of-system/v20'

  static primaryKey = 'medicalReviewOfSystemFieldOptionId'

  static fields() {
    return {
      ...super.fields(),

      medicalReviewOfSystemFieldOptionId: this.uid(() => intUniqueId()), // if this is not set then update based on primary key will not work This is the unique ID for each service statement
      medicalReviewOfSystemFieldOptionLabel: this.string(null),
      medicalReviewOfSystemFieldNameInDb: this.string(null),

      ROW_END: this.number(2147483648000), // this is unix_timestamp value from mariaDB for ROW_END when a record is created new in MariaDB system versioned table.
    }
  }
}