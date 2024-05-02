enum CronFieldType {
  Minute = 'minute',
  Hour = 'hour',
  DayOfMonth = 'day of month',
  Month = 'month',
  DayOfWeek = 'day of week',
  Year = 'year'
}

class CronField {
  private readonly type: CronFieldType
  private readonly allowedValues: string[]

  constructor(type: CronFieldType, allowedValues: string[]) {
    this.type = type
    this.allowedValues = allowedValues
  }

  public toString(): string {
    return this.type
  }

  public isAllowed(value: string): boolean {
    return this.allowedValues.includes(value)
  }
}

export class CronExpression {
  private fields: CronField[]

  constructor(fields: CronField[]) {
    this.fields = fields
  }

  public validate(fieldValues: string[]): boolean {
    if (fieldValues.length !== this.fields.length) {
      return false
    }

    for (let i = 0; i < fieldValues.length; i++) {
      if (!this.fields[i].isAllowed(fieldValues[i])) {
        return false
      }
    }

    return true
  }

  public static parse(expression: string) {
    const fields = expression.split(' ')

    if (fields.length !== 5 && fields.length !== 6) {
      throw new Error('Invalid Cron expression')
    }

    const minuteField = new CronField(CronFieldType.Minute, [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59'
    ])
    const hourField = new CronField(CronFieldType.Hour, [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23'
    ])
    const dayOfMonthField = new CronField(CronFieldType.DayOfMonth, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31'
    ])
    const monthField = new CronField(CronFieldType.Month, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12'
    ])
    const dayOfWeekField = new CronField(CronFieldType.DayOfWeek, [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ])
    const yearField = new CronField(CronFieldType.Year, ['*']) // 可根据需要扩展

    let cronExpression: CronExpression

    if (fields.length === 5) {
      cronExpression = new CronExpression([
        minuteField,
        hourField,
        dayOfMonthField,
        monthField,
        dayOfWeekField
      ])
    } else {
      cronExpression = new CronExpression([
        minuteField,
        hourField,
        dayOfMonthField,
        monthField,
        dayOfWeekField,
        yearField
      ])
    }

    if (!cronExpression.validate(fields)) {
      return
    }

    return cronExpression
  }
}
