import { useState, useRef } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';
import { DocumentRequirement, UploadedDocument, ValidationError } from '../../../types';

interface DocumentUploadFormProps {
  requirements: DocumentRequirement[];
  uploadedDocuments: UploadedDocument[];
  onUpload: (requirementId: string, file: File) => void;
  onRemove: (documentId: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationError[];
}

const DocumentUploadForm = ({ requirements, uploadedDocuments, onUpload, onRemove, onNext, onBack, errors }: DocumentUploadFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeReqId, setActiveReqId] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && activeReqId) {
      onUpload(activeReqId, e.target.files[0]);
    }
    // Reset
    if (fileInputRef.current) fileInputRef.current.value = '';
    setActiveReqId(null);
  };

  const triggerUpload = (reqId: string) => {
    setActiveReqId(reqId);
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={handleFileSelect} 
        accept=".jpg,.jpeg,.png,.pdf"
      />

      {requirements.map((req) => {
        const uploaded = uploadedDocuments.find(d => d.requirementId === req.id);
        const error = errors.find(e => e.field === req.id);

        return (
          <div key={req.id} className={`p-6 border rounded-xl transition-all ${error ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50/50'}`}>
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm text-amber-500">
                  <Icon name={req.icon} size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{req.name} {req.required && <span className="text-red-500">*</span>}</h4>
                  <p className="text-sm text-slate-500 mb-2">{req.description}</p>
                  <p className="text-xs text-slate-400">Max size: {req.maxSize / 1000000}MB • Formats: {req.format.join(', ')}</p>
                </div>
              </div>

              {uploaded ? (
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium mb-2">
                    <Icon name="CheckCircle" size={16} /> Uploaded
                  </span>
                  <br />
                  <Button variant="ghost" size="icon" onClick={() => onRemove(uploaded.id)} className="text-red-500 hover:bg-red-50">
                    <Icon name="Trash2" size={18} />
                  </Button>
                </div>
              ) : (
                <Button variant="outline" onClick={() => triggerUpload(req.id)} iconName="Upload" iconPosition="left">
                  Upload
                </Button>
              )}
            </div>

            {uploaded && uploaded.fileType.startsWith('image/') && (
              <div className="mt-4 ml-16">
                <div className="h-24 w-24 rounded-lg overflow-hidden border border-slate-200">
                  <AppImage src={uploaded.url} alt={req.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-xs text-slate-500 mt-1 truncate max-w-[200px]">{uploaded.fileName}</p>
              </div>
            )}
            
            {error && <p className="text-sm text-red-500 mt-2 ml-16">{error.message}</p>}
          </div>
        );
      })}

      <div className="flex justify-between pt-6 border-t border-slate-100">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Review & Submit</Button>
      </div>
    </div>
  );
};

export default DocumentUploadForm;