import _ from 'lodash'
import { Entity, Column} from "typeorm"
import { DbConnectionBase, SavedConnection } from './saved_connection'

@Entity({ name: 'used_connection' })
export class UsedConnection extends DbConnectionBase {

  constructor(other) {
    super()
    if (other) {
      this.connectionType = other.connectionType
      this.defaultDatabase = other.defaultDatabase
      this.username = other.username
      this.path = other.path
      this.uri = other.uri
      this.port = other.port
      this.host = other.host
      this.sshHost = other.sshHost
      this.sshPort = other.sshPort
      this.sshBastionHost = other.sshBastionHost
      this.name = other.name
      if (other.id) {
        this.savedConnectionId = other.id
      }
    }

  }

  toNewConnection() {
    const result = new SavedConnection()
    _.assign(result, this)
    result.id = null
    return result
  }

  @Column({type: 'int', nullable: true})
  savedConnectionId = null

}