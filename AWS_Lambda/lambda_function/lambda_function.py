import json
import pymysql

def lambda_handler(event, context):
    # Establish database connection
    connection = pymysql.connect(
        host="db-social.cd4wcwmu0tot.us-east-1.rds.amazonaws.com",
        user="admin",
        password="sparkycoders",
        database="socialdb",
        cursorclass=pymysql.cursors.DictCursor
    )
    
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM Feedback')
    
    rows = cursor.fetchall()
    
    for row in rows:
        print(row)
    
    connection.close()
    
    
    return {
        'statusCode': 200,
        'body': json.dumps('Operation Completed!')
    }
