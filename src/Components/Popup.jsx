import { TextField,Button, Grid } from '@material-ui/core'
import React from 'react'

function Popup({popupData}) {
    return (    
        <div>
            <Grid container spacing={3} style={{padding:'20px'}}>
                <Grid ites xs={4}>
                    <div style={{ marginRight: '20px' }}>
                    <TextField margin='dense' helperText='Patient Name' value={popupData.patientName}></TextField>
                    <TextField margin='dense' helperText='Patient Record Nuber' value={popupData.patientRecordNumber}></TextField>
                    <TextField margin='dense' helperText='patientDOB' value={popupData.patientDOB}></TextField>
                    </div>
                </Grid>
                <Grid ites xs={4}>
                <div style={{ marginRight: '20px' }}>
                    <TextField margin='dense' helperText='orzanizationRequested' value={popupData.orzanizationRequested}></TextField>
                    <TextField margin='dense' helperText='Requester' value={popupData.requester}></TextField>
                    <TextField margin='dense' helperText='itemRequested' value={popupData.itemRequested}></TextField>
                    </div>
                </Grid>
                <Grid ites xs={4}>
                <div style={{ marginRight: '20px' }}>
                    <TextField margin='dense' helperText='Status' value={popupData.status}></TextField>
                    <TextField margin='dense' helperText='Requested Date' value={popupData.requestedDate}></TextField>
                    <TextField margin='dense' className={'fontRed'} helperText='Due Data' value={popupData.dueData}></TextField>
                    </div>
                </Grid>
                </Grid>
            <TextField
                margin='normal'
                id="Notes"
                helperText='Notes'
                value={popupData.note}
                fullWidth
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
            />
            <div className="flex">
                <div style={{width:'50%'}}>
            <TextField
                   margin='normal'
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                    />
                    </div>
                <div className="popupButtonBox">
                    <Button variant='contained' style={{backgroundColor:'#425f63'}} disableElevation>Upload</Button>
                    <Button variant='outlined' > Submit</Button>
                </div>
            </div>
           
        </div>
    )
}

export default Popup
